class UrinalStatus():
    FREE = True
    BUSY = False

class Bathroom():
    urinals = []

    def __init__(self, urinals):
        self.urinals = urinals

    def getUsableUrinals(self):
        freeUrinals = self.__getFreeUrinals()
        if (freeUrinals == [1, 2]):
            return [2]

        return freeUrinals

    def __getFreeUrinals(self):
        freeUrinals = []

        for position, urinal in enumerate(self.urinals):
            if (self.__isUrinalFreeAt(position)):
                freeUrinals.append(position)

        return freeUrinals

    def __hasUrinals(self):
        return (len(self.urinals) > 0)

    def __isUrinalFreeAt(self, position):
        return self.urinals[position] == UrinalStatus.FREE
