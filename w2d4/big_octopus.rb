# search for the largest string using different algorithms

# quadradic search
def sluggish_octopus(array)
  array.each do |el1|
    return el1 if array.all? { |el2| el1.length >= el2.length }
  end
end

# n log n search
def dominant_octopus(array)
  length_sort = proc { |el1, el2| el1.length <=> el2.length }
  sorted_array = array.merge_sort(&length_sort)
  sorted_array.last
end

# constant search
def clever_octopus(array)
  largest_string = ""
  array.each do |string|
    largest_string = string if string.length > largest_string.length
  end

  largest_string
end

class Array
  def merge_sort(&prc)
    return self if size <= 1
    prc ||= proc { |el1, el2| el1 <=> el2 }
    mid_point = self.size / 2
    left_sorted = self.take(mid_point).merge_sort(&prc)
    right_sorted = self.drop(mid_point).merge_sort(&prc)
    Array.merge(left_sorted, right_sorted, &prc)
  end

  def self.merge(left, right, &prc)
    merged = []
    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1 then merged << left.shift
      else merged << right.shift
      end
    end

    merged + left + right
  end
end
