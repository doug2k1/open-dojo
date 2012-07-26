# coding: utf-8

class ProdutoEscalar():
    
    def calcular(self, A, B):
        
        if len(A) != len(B):
            raise TypeError("Os escalares devem ter o mesmo número de elementos")

        result = sum([A[i]*B[i] for i in range(len(A))])

        if result < 0:
            return [result, "obtuso"]
        elif result == 0:
            return [result, "reto"]
        else:
            return [result, "agudo"]