class UrinalStatus():
    FREE = True
    BUSY = False

class Bathroom():
    urinals = []

    def __init__(self, urinals = [1]):
        self.urinals = urinals

    def getUsableUrinals(self):
        availableUrinals = []

        if (self.__hasSingleUrinal() and self.__isUrinalFreeAt(0)):
            availableUrinals.append(0)
        else:
            for position, urinal in enumerate(self.urinals):
                if (self.__isUrinalUsableAt(position)):
                    availableUrinals.append(position)

        return availableUrinals

    def __hasSingleUrinal(self):
        return (len(self.urinals) == 1)

    def __isUrinalFreeAt(self, position):
        return (self.urinals[position] == UrinalStatus.FREE)

    def __isUrinalUsableAt(self, position):
        previousPosition = position - 1
        nextPosition = position + 1

        if (self.__isFirstPosition(position)):
            isUsable = (self.__isUrinalFreeAt(position) and self.__isUrinalFreeAt(nextPosition))
        elif (self.__isLastPosition(position)):
            isUsable = (self.__isUrinalFreeAt(previousPosition) and self.__isUrinalFreeAt(position))
        else:
            isUsable = (self.__isUrinalFreeAt(previousPosition) and
                        self.__isUrinalFreeAt(position) and
                        self.__isUrinalFreeAt(nextPosition))

        return isUsable

    def __isFirstPosition(self, position):
        return (position == 0)

    def __isLastPosition(self, position):
        return (position == len(self.urinals) - 1)
