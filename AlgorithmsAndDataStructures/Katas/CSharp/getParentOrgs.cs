using System;
using System.Collections.Generic;

namespace getParentOrgs
{
    public class Program
    {
        static void Main(string[] args)
        {
            var orgsList = new List<Org>() 
            {
                new Org { Name = "ANU", ID = 1, ParentID = null },
                new Org { Name = "ANU Law School", ID=2, ParentID = 1 },
                new Org { Name = "College of Law", ID = 3, ParentID = 2 },
            };

            var targetOrg = orgsList[2];
            var parentOrgs = OrgMethods.GetParentOrgsIteratively(orgsList, targetOrg);
            var parentOrgsRecursively = OrgMethods.GetParentOrgsIteratively(orgsList, targetOrg);

            foreach(var org in parentOrgs)
            {
                Console.WriteLine(org.Name);
            }

            foreach (var org in parentOrgsRecursively)
            {
                Console.WriteLine(org.Name);
            }

        }

        public class Org
        {
            public string Name { get; set; }
            public int ID { get; set; }
            public int? ParentID { get; set; }
        }

        public static class OrgMethods
        {
            public static List<Org> GetParentOrgsIteratively(List<Org> orgsList, Org targetOrg)
            {
                var returnList = new List<Org>() { targetOrg };
                if (!targetOrg.ParentID.HasValue) return returnList;

                while (targetOrg.ParentID.HasValue)
                {
                    var parentOrg = orgsList.Find(o => o.ID == targetOrg.ParentID.Value);
                    returnList.Insert(0, parentOrg);
                    targetOrg = parentOrg;
                }

                return returnList;
            }

            public static List<Org> GetParentOrgsRecursively(List<Org> orgsList, Org targetOrg)
            {
                if (!targetOrg.ParentID.HasValue) return new List<Org>() { targetOrg };

                var parentOrg = orgsList.Find(o => o.ID == targetOrg.ParentID);
                return new List<Org> (GetParentOrgsRecursively(orgsList, parentOrg)) { parentOrg };
            }
        }
    }
}
