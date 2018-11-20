using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Options;
using Nest;
using Rosbank.Models;

namespace Rosbank.Services
{
    public class DBService<T> where T : Document
    {

        public DBService(string index)
        {
            var node = new Uri("http://localhost:9200");
            var connectionSettings = new ConnectionSettings(node)
                .DefaultIndex(index)
                .EnableDebugMode()
                .PrettyJson()
                .RequestTimeout(TimeSpan.FromMinutes(2));
            Client = new ElasticClient(connectionSettings);

            if (!Client.IndexExists(index).Exists)
            {
                Client.CreateIndex(index);
            }
        }

        public string Index { get; private set; }

        public ElasticClient Client { get; private set; }

        public List<T> GetAll()
        {
            var response = Client.Search<T>(s => s.Size(100).MatchAll());
            return (List<T>)response.Documents;
        }

        public T GetOne(string id)
        {
            var response = GetResponse(id);
            if (response.Documents.Count == 0)
            {
                return null;
            }

            return response.Documents.FirstOrDefault();
        }

        public T Add(T doc)
        {
            if (doc.Id == null)
            {
                doc.Id = Guid.NewGuid().ToString();
            }

            if (GetResponse(doc.Id).Documents.Count != 0)
            {
                // throw new BadRequestException("Document already existing");
            }

            var response = Client.Index(doc, idx => idx.Index(Index));
            return doc;
        }

        public bool Remove(string id)
        {
            var document = GetHit(id);
            if (document == null)
            {
                return false;
            }

            var response = Client.Delete<T>(document.Id);
            return response.Result.Equals(Result.Deleted);
        }

        public bool Update(string id, T doc)
        {
            var document = GetHit(id);
            if (document == null)
            {
                return false;
            }

            var response = Client.Update<T, object>(document.Id, u => u
                   .Doc(doc)
                   .DocAsUpsert());
            return response.Result.Equals(Result.Updated);
        }

        private SearchResponse<T> GetResponse(string id)
        {
            var response = Client.Search<T>(s =>
               s.Size(1).Query(
                   q => q.Match(m => m
                      .Field(f => f.Id)
                      .Query(id.ToString()))));
            return (SearchResponse<T>)response;
        }

        private Hit<T> GetHit(string id)
        {
            var response = GetResponse(id);

            var c = response.Hits.GetEnumerator();
            c.MoveNext();
            return (Hit<T>)c.Current;
        }
    }
}
