# coding: utf-8

import unittest
from produto_escalar import ProdutoEscalar

class ProdutoEscalar_test(unittest.TestCase):

    def test_listas_simples_agudo(self):
        A = [1]
        B = [1]
        self.assertEquals([1, "agudo"],  ProdutoEscalar().calcular(A, B))

    def test_listas_simples_obtuso(self):
        A = [-1]
        B = [1]
        self.assertEquals([-1, "obtuso"],  ProdutoEscalar().calcular(A, B))

        A = [2]
        B = [-5]
        self.assertEquals([-10, "obtuso"],  ProdutoEscalar().calcular(A, B))

    def test_listas_simples_reto(self):
        A = [0]
        B = [0]
        self.assertEquals([0, "reto"],  ProdutoEscalar().calcular(A, B))

    def test_listas_simples_obtuso_ordem_inversa(self):
        A = [1]
        B = [-1]
        self.assertEquals([-1, "obtuso"],  ProdutoEscalar().calcular(A, B))

    def test_listas_2d_agudo(self):
        A = [2, 3]
        B = [4, -1]
        self.assertEquals([5, "agudo"], ProdutoEscalar().calcular(A, B))

    def test_listas_tamanhos_diferentes(self):
        A = [2, 3, 4]
        B = [4, -1]
        self.assertRaises(TypeError, ProdutoEscalar().calcular, (A,B))

    def test_listas_vazias(self):
        A = []
        B = []
        self.assertRaises(TypeError, ProdutoEscalar().calcular, (A,B))

if __name__ == '__main__':
    unittest.main()

