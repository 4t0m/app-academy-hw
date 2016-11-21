class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
      system("clear")
    end

    reset_game
    game_over_message
  end

  def take_turn
    show_sequence
    require_sequence
    unless game_over
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color

    @seq.each do |color|
     puts color
     sleep(0.5)
     system("clear")
   end
  end

  def require_sequence
    puts "Okay, repeat the sequence you just saw."

    @seq.each do |color|
      user_color = gets.chomp
      if color[0] != user_color
        @game_over = true
        break
      end
    end
    sleep 0.25
  end

  def add_random_color
    seq << COLORS.sample
  end

  def round_success_message
    puts "You've passed this round!"
  end

  def game_over_message
    puts "Game over!"
  end

  def reset_game
    @sequence_length = 1
    @seq = []
    @game_over = false
  end
end
