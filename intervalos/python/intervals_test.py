import unittest
from intervals import IntervalsExtractor, IntervalsFormatter

class TestIntervalsFormatter(unittest.TestCase):
    def test_format_empty_interval(self):
        numbers = []
        formatted_interval = IntervalsFormatter.format(numbers)

        self.assertEqual('[]', formatted_interval)

    def test_format_interval_with_single_item(self):
        numbers = [1]
        formatted_interval = IntervalsFormatter.format(numbers)

        self.assertEqual('[1]', formatted_interval)

    def test_format_interval_with_two_items(self):
        numbers = [1, 2]
        formatted_interval = IntervalsFormatter.format(numbers)

        self.assertEqual('[1-2]', formatted_interval)

    def test_format_interval_with_many_items(self):
        numbers = [1, 2, 3, 4, 5, 6]
        formatted_interval = IntervalsFormatter.format(numbers)

        self.assertEqual('[1-6]', formatted_interval)

    def test_format_unsorted_interval(self):
        numbers = [2, 1, 4, 3, 6, 5]
        formatted_interval = IntervalsFormatter.format(numbers)

        self.assertEqual('[1-6]', formatted_interval)

    def test_given_interval_is_not_changed(self):
        original_numbers = [2, 1, 4, 3, 6, 5]
        numbers = [2, 1, 4, 3, 6, 5]
        IntervalsFormatter.format(numbers)
        self.assertEqual(original_numbers, numbers)


class TestIntervalsExtractor(unittest.TestCase):
    def test_single_interval_unsorted(self):
        numbers = [2, 1, 4, 3, 6, 5]
        intervals = IntervalsExtractor.extract(numbers)
        self.assertEqual('[1-6]', intervals)

    def test_two_intervals(self):
        numbers = [1, 2, 3, 6, 7, 8]
        intervals = IntervalsExtractor.extract(numbers)
        self.assertEqual('[1-3], [6-8]', intervals)

    def test_multiple_intervals(self):
        numbers = [100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150]
        intervals = IntervalsExtractor.extract(numbers)
        expected_output = '[100-105], [110-111], [113-115], [150]'
        self.assertEqual(expected_output, intervals)

    def test_multiple_intervals_from_unsorted_list(self):
        numbers = [150, 101, 100, 104, 103, 102, 110, 105, 114, 113, 111, 115]
        intervals = IntervalsExtractor.extract(numbers)
        expected_output = '[100-105], [110-111], [113-115], [150]'
        self.assertEqual(expected_output, intervals)

    def test_given_list_is_not_changed(self):
        original_numbers = [2, 1, 4, 3, 6, 5]
        numbers = [2, 1, 4, 3, 6, 5]
        IntervalsExtractor.extract(numbers)
        self.assertEqual(original_numbers, numbers)

    def test_get_formatted_intervals_list(self):
        numbers = [1, 2, 3, 4, 7, 8, 9, 12, 13, 17]
        formatted_interval_list = IntervalsExtractor.get_formatted_intervals_list(numbers)
        expected_intervals_list = ['[1-4]', '[7-9]', '[12-13]', '[17]']
        self.assertEqual(formatted_interval_list, expected_intervals_list)

    def test_get_formatted_intervals_list_from_unsorted_list(self):
        numbers = [3, 2, 1, 4, 8, 7, 9, 17, 12, 13]
        formatted_interval_list = IntervalsExtractor.get_formatted_intervals_list(numbers)
        expected_intervals_list = ['[1-4]', '[7-9]', '[12-13]', '[17]']
        self.assertEqual(formatted_interval_list, expected_intervals_list)


if __name__ == '__main__':
    unittest.main()