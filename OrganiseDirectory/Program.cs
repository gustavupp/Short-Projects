using System;
using System.IO;
using System.Linq;

namespace OrganiseDirectory
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.Green;

            Console.WriteLine("Type the path to the desired folder, or leave press ENTER to set the path to the Downloads folder:\n");
            var path = Console.ReadLine();

            while (!Directory.Exists(path) && !string.IsNullOrEmpty(path))
            {
                Console.WriteLine("Invalid path. Type a valid path:\n");
                path = Console.ReadLine();
            }

            if (string.IsNullOrWhiteSpace(path))
                path = @$"C:\Users\{Environment.UserName}\Downloads";

            CreateFolderAndMoveFiles(path);
            DeleteEmptyFolders(path);

            Console.ReadLine();
        }

        private static void DeleteEmptyFolders(string path)
        {
            var folders = Directory.GetDirectories(path);
            foreach (var folder in folders)
            {
                Console.WriteLine(folder);
                var directoryInfo = new DirectoryInfo(folder);

                var subfolders = directoryInfo.EnumerateDirectories().ToList();
                var filesInFolder = directoryInfo.EnumerateFiles().ToList();

                if (!filesInFolder.Any() && !subfolders.Any())
                {
                    Console.WriteLine("No files/folders in this directory. Deleting folder...");
                    try
                    {
                        Directory.Delete(folder);
                    }
                    catch (IOException ex)
                    {
                        Console.WriteLine(ex.Message);
                    }
                }
            }
        }

        private static void CreateFolderAndMoveFiles(string path)
        {
            var files = Directory.GetFiles(path, "*.*", SearchOption.TopDirectoryOnly);

            foreach (var file in files)
            {
                var ext = Path.GetExtension(file);
                var fileFolder = $@"{path}\{ext}";
                var fileName = Path.GetFileName(file);
                var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(file);

                if (Directory.Exists(fileFolder))
                {
                    if (File.Exists($@"{path}\{ext}\{fileName}"))
                        fileName = $"{fileNameWithoutExtension}-{DateTime.Now.Ticks}{ext}";

                    File.Move(file, $@"{path}\{ext}\{fileName}", false);
                }
                else
                {
                    Directory.CreateDirectory(fileFolder);
                    File.Move(file, $@"{path}\{ext}\{fileName}");
                }
            }
        }
    }
}
