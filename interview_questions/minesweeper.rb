# Branch tech interview qu.

def generate_board(width, height, number_of_mines)
  default_value = 0
  board = Array.new(height) {Array.new(width, default_value)}
  mine_positions = generate_mine_positions(number_of_mines, width, height)
  board = populate_board(board, mine_positions, width, height)
  print_board(board)
end

def generate_mine_positions(num, width, height)
  mine_positions = []
  while mine_positions.length < num
    row = rand(0...height)
    col = rand(0...width)
    mine_positions.push([row, col]) if !mine_positions.include?([row, col])
  end
  return mine_positions
end

def populate_board(board, mine_positions, width, height) 
  mine_positions.each do |position|
    row = position[0]
    col = position[1]
    board[row][col] = "*"
    update_surroundings(board, position, width, height)
  end
  return board
end

def update_surroundings(board, mine_position, width, height)
  row = mine_position[0]
  col = mine_position[1]
  increments = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ]
  increments.each do |increment|
    surrounding_row = row + increment[0]
    surrounding_col = col + increment[1]
    if (0 <= surrounding_row && surrounding_row < height) && (0 <= surrounding_col && surrounding_col < width)
      if board[surrounding_row][surrounding_col] != "*"
        board[surrounding_row][surrounding_col] += 1
      end
    end
  end
end

def print_board(board)
  board.each do |row|
    row.each do |ele|
      print(ele)
    end
    puts()
  end
end

width = 3
height = 3
number_of_mines = 5
generate_board(width, height, number_of_mines)