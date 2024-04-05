# VIM

## What this session is:
- enough knowledge to traverse, edit and save a file
- enough commands

## What this session is not:
- go through every single command (I don't even know them)
- turn vim into your full time IDE (but it might tempt you)

---

Clone this repo https://github.com/conradmuan/enough-vim
This will be our playground

---

Open it with vim

```
vim index.js
```

---

### Quitting Vim

- :q to quit
- the : opens the command-line mode
- more on that later
- `esc` is your friend if you hit a bunch of stuff and get lost
- :q! is your best friend 

---

### Normal Mode.

- you don't edit in normal mode
- traversal: `hjkl`
    - imagine h and l are the left and right arrow keys
    - j and k are the down and up arrow keys
    - but doing llll and jjjj is not really fast. We'll get faster in a bit
- faster traversal: `w` and `b`
    - `w` moves to the beginning of the next word
    - `b` moves to the beginning of the previous word
    - but still not fast enough
- a bit faster: combine with a number
    - `5w` moves to the beginning of the 5th next word
    - `5b` moves to the beginning of the 5th previous word
    - `5l` moves 5 characters to the right
- even faster: `$` and `^`
    - `$` moves to the end of the line
    - `^` moves to the first non-whitespace character of the line
- going to the middle of the line: `<f-char>`
    - `f` followed by a character moves to the next occurrence of that character
    - `F` followed by a character moves to the previous occurrence of that character
    - `;` repeats the last f or F command
    - `,` repeats the last f or F command in the opposite direction
- beginning of file: `gg`, end of file: `G`
    - `gg` moves to the beginning of the file
    - `G` moves to the end of the file
- page traversal: `Ctrl-d` and `Ctrl-u`
    - `Ctrl-d` moves down half a page
    - `Ctrl-u` moves up half a page

How about going to a specific line?

- set the line number to show up in the status bar
    - `:set number`
    - go to a specific line: `:<line-number>`
    - combine `j` and `k` with a number to move that many lines ex `5j` moves down 5 lines

Counting sucks.

- set relative line numbers
    - `:set relativenumber`, or `:set rnu`
    - now you don't have to count

**My favourite:** Brackets: highlight a bracket and type `%` to go to the matching bracket

On numbers: you can combine a number with a command to repeat that command that many times. More on that later.

Finding in file:
- `/` followed by a search term
    - `n` to go to the next occurrence
    - `N` to go to the previous occurrence
    - `*` to search for the word under the cursor
    - `#` to search for the word under the cursor in the opposite direction

I wish I could see this. Turn on highlighting.
- `:set hlsearch`, or `:set hls`
- `nohlsearch`, or `nohls` to turn it off temporarily
- `:set nohlsearch`, or `:set nohls` to turn it off completely

---

### Insertion Mode

Let's edit this file. Remember `esc` to go back to normal mode.

- `i` to enter insertion mode (inserts before the cursor)
- `a` to enter insertion mode (inserts after the cursor)
- `I` to enter insertion mode at the beginning of the line
- `A` to enter insertion mode at the end of the line
- `o` to insert a new line below the current line
- `O` to insert a new line above the current line

i, a, o are my most used insertion commands.

- `r` to replace the character under the cursor
- `R` to replace characters until you hit `esc`
- `c` to change text*
    - `cw` to change to the end of the word
    - `c$` to change to the end of the line
    - `c^` to change to the beginning of the line
    - `c5w` to change the next 5 words
I don't use any of the above. I only use the following:
    - `caw` to change the current word and the space after it
    - caw = change a word

- `d` is similar to `c` but it doesn't enter insertion mode. It deletes the text instead.
    - `daw` to delete the current word and the space after it
    - daw = delete a word

You probably noticed me undoing / redoing a lot.

In normal mode:
- `u` to undo
- `Ctrl-r` to redo

Saving the file:
- `:w` to save
- `:wq` to save and quit

---

### Write a new function

Let's write a function at the end of this file:
- `G` to go to the end of the file
- `o` to insert a new line below the current line
- now write the function and hit `esc`

Tab width is 8 spaces. Let's change that to 4 spaces.
Undo writing that function and set tabs to 4 spaces first.

- `:set tabstop=4`, this will set the number of spaces a tab counts for
- `:set softtabstop=4`, this will set the number of spaces to insert when you hit tab or backspace
- `:set expandtab`, this will convert tabs to spaces
- `:set shiftwidth=4`, this will set the number of spaces to insert when you hit tab
- `:set smartindent`, this will make the next line indent the same as the previous line, but also take into account the context

Redo writing that function and then save and quit `:wq`

---

### Customize Vim a bit

If we saved and quit before and open the file again, our line numbers are gone. Let's make that permanent.

Open the vimrc file. It's typically in the home directory

```
vim ~/.vimrc
```

- line numbers: `set relativenumber`, or `set rnu`
- highlighting: `set hlsearch`, or `set hls`
- tab width: 
    
```
set tabstop=4
set softtabstop=4
set shiftwidth=4
set expandtab
set smartindent
```

Bonus,
- let's turn on syntax highlighting
    - `syntax on`
- turn on whitespace highlighting
    - `set list`
    - `set listchars=tab:→\ ,space:·,`
- encoding
    - `set encoding=utf-8`
- scrolloff is the number of lines to keep visible at the top and bottom of the screen
    - `set scrolloff=8`

(All of this is found in the .vimrc file included in the repo)

Save, quit, reopen the file. You should see the changes. What if you don't like the colors?

- `:colorscheme <tab>`, or `:colorscheme` then `<C-d>` to see the available color schemes

If you want this permanent, add it to your vimrc file by adding the line `colorscheme <color-scheme>`

---

### Copy and Paste (the registers)

- `y` to yank (copy)
    - `yy` to yank the current line
    - `yw` to yank the current word
    - `y$` to yank to the end of the line
    - `y^` to yank to the beginning of the line
    - `y5w` to yank the next 5 words
    - `y5y` to yank the next 5 lines
- `p` to paste

I don't like using any of the above. I only use the following:
    - `yy`
    - `y5y`

If I need to yank part of a line, I use visual mode. More on that later

Everything you yank gets stored in a register. You can see the registers by typing `:reg`

---

### Editing / Deleting stuff in Normal Mode

- `>` to indent
- `<` to unindent

- `x` to delete the character under the cursor
- `X` to delete the character before the cursor
- `dd` to delete the current line
- `dw` to delete the current word
- `d$` to delete to the end of the line
- `d^` to delete to the beginning of the line
- `d5w` to delete the next 5 words
- `d5d` to delete the next 5 lines
- `d` is similar to `c` but it doesn't enter insertion mode. It deletes the text instead.
    - `daw` to delete the current word and the space after it
    - daw = delete a word

Deleting is similar to yanking. Everything you delete gets stored in a register. You can see the registers by typing `:reg`

To paste something from the register, go into insert mode and type `<C-r><register>`. For example, to paste the last thing you deleted, type `<C-r>0`


---

### Visual Mode

I love this mode because it's very similar to how we would use a mouse to select text.

- `v` to enter visual mode
    - use `hjkl` to select text
    - you can use all the traversal commands we learned in normal mode
- `V` to enter visual line mode

After selecting text, you can:
- `y` to yank
- `d` to delete
- `c` to change
- `>` to indent
- `<` to unindent

Multiple cursors:
- `Ctrl-v` to enter visual block mode
    - use `hjkl` to select text
    - you can use all the traversal commands we learned in normal mode
    - `I` to insert at the beginning of the selection
    - `esc` to go back to normal mode. 

My favourite sequence: highlighting a function
- `v` to enter visual mode
- `f{` to highlight the function
- `%` to highlight the matching bracket
- `y`, or `d` or whatever I need to do with it

---

### Netrw

Let's say you're working on a project and you want to open a file in the same directory. You can do this without leaving vim.

- `:e .` to open the file explorer (or `:Explore`)
- `:e <file>` to open a file or just highlight it and press enter

What if you wanted to open two files side by side?

- `:vsplit` to split the window vertically
- `:split` to split the window horizontally
- `Ctrl-w` followed by `hjkl` to move between windows
- `:q` to close a window

This is getting dangerously close to an IDE!

### Next steps

- VSCode vim plugin if you don't want to commit
- nvim if you do want to commit: https://neovim.io/
    - better vim with more features
    - lua for scripting instead of vimscript
- Plugged for managing plugins: https://github.com/junegunn/vim-plug
- Plugins I use:
    - fzf: fuzzy finder
    - vim-polyglot: syntax highlighting
    - coc.nvim: language server protocol, make this an IDE!
