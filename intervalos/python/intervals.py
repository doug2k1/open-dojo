class IntervalsFormatter():
    @staticmethod
    def format(interval):
        sorted_interval = list(interval)
        sorted_interval.sort()

        if (len(sorted_interval) == 0):
            formatted_interval = '[]'
        elif (len(sorted_interval) <= 1):
            formatted_interval = "[%s]" % sorted_interval[0]
        else:
            formatted_interval = "[%s-%s]" % (sorted_interval[0], sorted_interval[-1])

        return formatted_interval


class IntervalsExtractor():
    @staticmethod
    def extract(numbers):
        formatted_intervals_list = IntervalsExtractor.get_formatted_intervals_list(numbers)

        return ', '.join(formatted_intervals_list)

    @staticmethod
    def extract_intervals_list(numbers):
        result_list = []

        sorted_numbers = list(numbers)
        sorted_numbers.sort()
        for index, current_number in enumerate(sorted_numbers):
            is_sequential = (current_number - sorted_numbers[index - 1] == 1)

            if (not is_sequential):
                result_list.append([])

            result_list[-1].append(current_number)

        return result_list

    @staticmethod
    def get_formatted_intervals_list(numbers):
        formatted_intervals = []

        intervals_list = IntervalsExtractor.extract_intervals_list(numbers)
        for interval in intervals_list:
            formatted_intervals.append(IntervalsFormatter.format(interval))

        return formatted_intervals