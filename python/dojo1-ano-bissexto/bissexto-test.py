# -*- coding: utf-8 -*-

""" O ano for divisível por 4, mas não divisível por 100, exceto se ele for também divisível por 400.
"""

import unittest
from bissexto import bissexto

class bissexto_test(unittest.TestCase):
    def test_bissexto(self):
        self.assertEqual(bissexto(1732),True)
        self.assertEqual(bissexto(1500), False)
        self.assertEqual(bissexto(1600), True)
        self.assertEqual(bissexto(2000), True)
        self.assertEqual(bissexto(1700), False)
        self.assertEqual(bissexto(4), True)
        self.assertEqual(bissexto(16), True)
        self.assertEqual(bissexto(400), True)

    def test_nao_bissexto(self):
        self.assertEqual(bissexto(1742), False)
        self.assertEqual(bissexto(1889), False)
        self.assertEqual(bissexto(1951), False)
        self.assertEqual(bissexto(2011), False)
        self.assertEqual(bissexto(100), False)
		
if __name__ == "__main__":
    unittest.main()