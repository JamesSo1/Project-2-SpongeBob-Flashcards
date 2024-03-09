# Web Development Project 2 - SpongeBob Flashcards 🍍

Submitted by: James So

This web app: Contains a set of flashcards based on the TV show, SpongeBob SquarePants. The user can progress through the deck of flashcards while keeping track of how many answers they got wrong and how many they got right. The cards will progress randomly.

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [ ] Cards have different visual styles such as color based on their category
  - [ ] *visual style implemented*

The following **additional** features are implemented:

* [x] The user can keep track of how many cards they have answered correctly and incorrectly

## Video Walkthrough

Here's a walkthrough of implemented required features:
    <a href="https://www.loom.com/share/b4c9510ba1a345b0a6d3936ee1ff7458">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/b4c9510ba1a345b0a6d3936ee1ff7458-with-play.gif">
    </a>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

A challenge that I faced was making the card component reset to the "question" side of the card when I went to a new card. Initially, when I flipped a card to the "answer" side of the card and proceeded to the next card, the next card would show the "answer" side instead of resetting to the "question" side. I managed to resolve this issue. Another challenge I faced was selecting the next random card that would appear from the card set. I overcame this challenge by utilizing JavaScript's random function to generate a random number that I would use to select the next card to display.

## License

    Copyright 2024 James So

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
