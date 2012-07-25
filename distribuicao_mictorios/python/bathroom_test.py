import unittest
from bathroom import Bathroom, UrinalStatus

class TestBathroom(unittest.TestCase):
    def test_single_urinal_free(self):
        urinals = [UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([0], bathroom.getUsableUrinals())

    def test_single_urinal_busy(self):
        urinals = [UrinalStatus.BUSY]
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def test_bathroom_with_two_urinals_both_free(self):
        urinals = [UrinalStatus.FREE] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([0, 1], bathroom.getUsableUrinals())

    def test_bathroom_with_two_urinals_one_free(self):
        urinals = [UrinalStatus.BUSY, UrinalStatus.FREE]
        bathroom = Bathroom(urinals)
        self.assertEqual([1], bathroom.getUsableUrinals())

    def test_bathroom_with_two_urinals_both_busy(self):
        urinals = [UrinalStatus.BUSY] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([], bathroom.getUsableUrinals())

    def test_bathroom_with_three_positions_all_free(self):
        urinals = [UrinalStatus.FREE] * 3
        bathroom = Bathroom(urinals)
        self.assertEqual([0, 1, 2], bathroom.getUsableUrinals())

    def test_bathroom_with_three_positions_first_busy(self):
        urinals = [UrinalStatus.BUSY] + [UrinalStatus.FREE] * 2
        bathroom = Bathroom(urinals)
        self.assertEqual([2], bathroom.getUsableUrinals())

if __name__ == '__main__':
    unittest.main()