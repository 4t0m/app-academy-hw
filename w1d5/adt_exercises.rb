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
