class Stack
  attr_reader :elements

  def initialize
    @elements = []
  end

  def add(el)
    elements.push(el)
  end

  def remove
    elements.pop
  end

  def show
    elements
  end
end


class Queue
  attr_reader :elements

  def initialize
    @elements = []
  end

  def enqueue(el)
    elements.push(el)
  end

  def dequeue
    elements.shift
  end

  def show
    elements
  end
end

class Map
  attr_reader :pairs

  def initialize
    @pairs = []
  end

  def assign(key, value)
    remove(key)
    pairs << [key, value]
  end

  def lookup(target)
    pairs.each { |key, value| return value if key == target }
    nil
  end

  def remove(target)
    pairs.reject! { |key, _| key == target }
  end

  def show
    pairs.each { |key, value| puts "#{key} => #{value}" }
  end
end
