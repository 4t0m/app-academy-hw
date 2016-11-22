class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @players = [name1, name2]
    @cups = Array.new(14) { [] }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0..5).each do |index|
      @cups[index] = [:stone, :stone, :stone, :stone]
    end
    (7..12).each do |index|
      @cups[index] = [:stone, :stone, :stone, :stone]
    end
  end

  def valid_move?(start_pos)
    unless (0..5).include?(start_pos) || (7..12).include?(start_pos)
      raise "Invalid starting cup"
    end

    if cups[start_pos].empty?
      raise "Invalid starting cup"
    end
    true
  end

  def make_move(start_pos, current_player_name)
    valid_move?(start_pos)
    remaining_stones = cups[start_pos]
    cups[start_pos] = []
    current_pos = start_pos
    opponents_cup = (current_player_name == @players.first) ? 13 : 6

    until remaining_stones.empty?
      current_pos += 1
      current_pos = 0 if current_pos == 14
      cups[current_pos] << remaining_stones.shift unless current_pos == opponents_cup
    end

    render
    next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine what #make_move returns
    if [6, 13].include?(ending_cup_idx)
      :prompt
    elsif cups[ending_cup_idx].count == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    return true if (0..5).all? { |index| cups[index].empty? }
    return true if (7..12).all? { |index| cups[index].empty? }
    false
  end

  def winner
    player1_score = cups[6].count
    player2_score = cups[13].count
    return :draw if player1_score == player2_score
    player1_score > player2_score ? @players.first : @players.last
  end
end
