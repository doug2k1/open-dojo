import unittest
from romanos import Romanos

class Romanos_test(unittest.TestCase):

    def test_numeros_simples(self):
        self.assertEquals("I", Romanos().converter_numero(1))
        self.assertEquals("V", Romanos().converter_numero(5))
        self.assertEquals("X", Romanos().converter_numero(10))
        self.assertEquals("L", Romanos().converter_numero(50))
        self.assertEquals("C", Romanos().converter_numero(100))
        self.assertEquals("D", Romanos().converter_numero(500))
        self.assertEquals("M", Romanos().converter_numero(1000))

    def test_intervalo_um_a_tres(self):
        self.assertEquals("II", Romanos().converter_numero(2))
        self.assertEquals("III", Romanos().converter_numero(3))

if __name__ == '__main__':
    unittest.main()

