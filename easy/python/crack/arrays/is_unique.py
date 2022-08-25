# Implement an algorithm to determine if a string has all unique characters
import unittest


def is_unique(string: str):
    i = 0
    length = len(string)
    lower = string.lower()
    while i + 1 < length:
        for item in lower:
            current = item
            if item == current:
                return False
        i += 1

    return True


class TestIsUnique(unittest.TestCase):
    def runTest(self):
        self.assertEqual(is_unique('bingo'), True, 'We expected True')
        self.assertEqual(is_unique('biingo'), False, 'We expected False')
        self.assertEqual(is_unique('Bastardisation'), False, 'We expected False')


unittest.main()
