# coding: utf-8

class ProdutoEscalar():
    
    def calcular(self, A, B):
        
        if len(A) != len(B):
            raise TypeError("Os escalares devem ter o mesmo número de elementos")

        product = sum([A[i]*B[i] for i in range(len(A))])

	return [product, self.__get_angle(product)]

    def __get_angle(self, product):
	if product < 0:
            return "obtuso"
        elif product == 0:
            return "reto"
        else:
            return "agudo"
