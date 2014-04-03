import unittest
from checkurl import checkurl

class bissexto_test(unittest.TestCase):
  def test_url_valida(self):
    self.assertEqual(checkurl('http://10minutemail.com'),True)
    self.assertEqual(checkurl('http://google.com'),True)
    self.assertEqual(checkurl('https://fb.com'), True)
    self.assertEqual(checkurl('https://'))

  def test_url_invalida(self):
    self.assertEqual(checkurl('abc://www.test.com'),False)
    self.assertEqual(checkurl('http:www.teste.com'),False)
    self.assertEqual(checkurl('httpwww.teste.com'),False)
    self.assertEqual(checkurl('http:/www.teste.com'),False)
    self.assertEqual(checkurl('http://.www.teste.com'),False)
    self.assertEqual(checkurl('http://'), False)


if __name__ == "__main__":
  unittest.main()