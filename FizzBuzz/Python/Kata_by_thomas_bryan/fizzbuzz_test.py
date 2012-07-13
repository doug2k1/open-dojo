import unittest
from fizzbuzz import Fizzbuzz

class Fizzbuzz_test(unittest.TestCase):

    def test_fizzbuzz(self):
        self.assertEqual(Fizzbuzz(15),'FizzBuzz')

    def test_fizz(self):
        self.assertEqual(Fizzbuzz(3),'Fizz')

    def test_buzz(self):
        self.assertEqual(Fizzbuzz(5),'Buzz')

    def test_kct(self):
        self.assertEqual(Fizzbuzz(1),1)

if __name__ == '__main__':
    unittest.main()