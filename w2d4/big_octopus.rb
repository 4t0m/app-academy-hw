def sluggish_octopus(array)
  array.each do |el1|
    return el1 if array.all? { |el2| el1.length >= el2.length }
  end
end
