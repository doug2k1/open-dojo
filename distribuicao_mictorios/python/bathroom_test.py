import unittest
from bathroom import Bathroom, UrinalStatus

class TestBathroom(unittest.TestCase):
    def testSingleUrinalFreeEmptyConstructor(self):
        bathroom = Bathroom()
        self.assertEqual([0], bathroom.getUsableUrinals())

    def testSingleUrinalFree(self):
        urinals = [UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([0], bathroom.getUsableUrinals())

    def testSingleUrinalBusy(self):
        urinals = [UrinalStatus.BUSY]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testSingleUrinalFree(self):
        urinals = [UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([0], bathroom.getUsableUrinals())

    def testTwoUrinalsAllFree(self):
        urinals = [UrinalStatus.FREE] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([0, 1], bathroom.getUsableUrinals())

    def testTwoUrinalsAllBusy(self):
        urinals = [UrinalStatus.BUSY] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testTwoUrinalsFirstFree(self):
        urinals = [UrinalStatus.FREE, UrinalStatus.BUSY]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testTwoUrinalsSecondFree(self):
        urinals = [UrinalStatus.BUSY, UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testThreeUrinalsAllFree(self):
        urinals = [UrinalStatus.FREE] * 3
        bathroom = Bathroom(urinals)
        self.assertEqual([0, 1, 2], bathroom.getUsableUrinals())

    def testThreeUrinalsAllBusy(self):
        urinals = [UrinalStatus.BUSY] * 3
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testThreeUrinalsFirstFree(self):
        urinals = [UrinalStatus.FREE] + [UrinalStatus.BUSY] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testThreeUrinalsSecondFree(self):
        urinals = [UrinalStatus.BUSY, UrinalStatus.FREE, UrinalStatus.BUSY]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testThreeUrinalsThirdFree(self):
        urinals = [UrinalStatus.BUSY] * 2 + [UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def testThreeUrinalsFirstTwoFree(self):
        urinals = [UrinalStatus.FREE] * 2 + [UrinalStatus.BUSY]
        bathroom = Bathroom(urinals)
        self.assertEqual([0], bathroom.getUsableUrinals())

    def testThreeUrinalsLastTwoFree(self):
        urinals = [UrinalStatus.BUSY] + [UrinalStatus.FREE] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([2], bathroom.getUsableUrinals())

    def testBathroomWithManyUrinalsFreeExtremes(self):
        urinals = [UrinalStatus.FREE] * 2 + [UrinalStatus.BUSY] + [UrinalStatus.FREE] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([0, 4], bathroom.getUsableUrinals())

    def testBathroomWithManyUrinalsFreeCenter(self):
        urinals = [UrinalStatus.BUSY] + ([UrinalStatus.FREE] * 3) + [UrinalStatus.BUSY]

        bathroom = Bathroom(urinals)
        self.assertEqual([2], bathroom.getUsableUrinals())

    def testBathroomWithManyUrinalsFreeAleatory(self):
        urinals = ([UrinalStatus.FREE] * 2) + [UrinalStatus.BUSY] + ([UrinalStatus.FREE] * 3) + ([UrinalStatus.BUSY] * 4) + ([UrinalStatus.FREE] * 4)
        #print urinals

        bathroom = Bathroom(urinals)
        self.assertEqual([0, 4, 11, 12, 13], bathroom.getUsableUrinals())

if __name__ == '__main__':
    unittest.main()
