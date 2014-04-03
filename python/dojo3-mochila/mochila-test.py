import unittest
from mochila import mochila

class mochila_test(unittest.TestCase):
    def test_mochila_vazia(self):
        numero = 10
        lista = []
        self.assertEqual(mochila(lista, numero),False)

    def test_mochila_valores(self):
        numero = 10
        lista = [1, 2, 10]
        self.assertEqual(mochila(lista, numero),True)

    def test_mochila_sem_valores(self):
        numero = 4
        lista = [1, 2, 10]
        self.assertEqual(mochila(lista, numero),False)

    def test_mochila_valores_soma(self):
        numero = 3
        lista = [1, 2]
        self.assertEqual(mochila(lista, numero),True)

    def test_numero_zero(self):
        numero = 0
        lista = [1, 2, 10, 20]
        self.assertEqual(mochila(lista, numero),True)

    def test_numero_nao_ordenado_positivos(self):
        numero = 13
        lista = [2, 10, 1, 20]
        self.assertEqual(mochila(lista, numero),True)

    def test_numero_nao_ordenado_negativo(self):
        numero = 13
        lista = [2, 10, 1, 20, -42]
        self.assertEqual(mochila(lista, numero),True)

    def test_numero_negativo(self):
        numero = -3
        lista = [1, -4]
        self.assertEqual(mochila(lista, numero),True)

    def test_numero_negativo(self):
        numero = -3
        lista = [1, 2, -4]
        self.assertEqual(mochila(lista, numero),True)


if __name__ == "__main__":
    unittest.main()