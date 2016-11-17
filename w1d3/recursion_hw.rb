def sum_to(n)
  if n < 0
    nil
  elsif n == 0
    0
  else
    n + sum_to(n - 1)
  end
end

#test cases
puts sum_to(5)
puts sum_to(5)  # => returns 15
puts sum_to(1)  # => returns 1
puts sum_to(9)  # => returns 45
puts sum_to(-8)  # => returns nil


def add_numbers(nums_array)
  if nums_array.empty?
    0
  else
    nums_array.pop + add_numbers(nums_array)
  end
end

#test cases
puts add_numbers([1,2,3,4]) # => returns 10
puts add_numbers([3]) # => returns 3
puts add_numbers([-80,34,7]) # => returns -39


def gamma_fnc(num)
  if num == 0
    nil
  elsif num == 1
    1
  else
    (num - 1) * gamma_fnc(num - 1)
  end
end

# Test Cases
p gamma_fnc(0)  # => returns nil
puts gamma_fnc(1)  # => returns 1
puts gamma_fnc(4)  # => returns 6
puts gamma_fnc(8)  # => returns 5040
