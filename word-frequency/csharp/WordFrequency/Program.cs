// Translated 'main.js' to c-sharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

void Main()
{
    string text = GetText().Replace("[^a-zA-Z]", "");
    string[] words = text.Split(' ');
    Dictionary<string, int> freqCounts = new Dictionary<string, int>();

    foreach (string word in words)
    {
        if (string.IsNullOrWhiteSpace(word))
        {
            continue;
        }

        if (freqCounts.ContainsKey(word))
        {
            freqCounts[word] += 1;
        }
        else
        {
            freqCounts[word] = 1;
        }
    }

    foreach (KeyValuePair<string, int> entry in freqCounts)
    {
        Console.WriteLine($"{entry.Key}: {entry.Value}");
    }
}

static string GetText()
{
    return @"
            Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives. The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every ""superstar,"" every ""supreme leader,"" every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.

            The Earth is a very small";
}

Main();