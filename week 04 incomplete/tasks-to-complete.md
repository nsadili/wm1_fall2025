## ToDo: Apply the following to conclude the Week 04 topics.

### Display property

1. Show how <b>.card</b> by default is displayed (inline, block, inline-block).

2. Change the value of display property. Check the output.

3. Add display: none vs visibility: hidden on one .card.

### Position property

1. Change position of the <b>header</b>. What do you think would be the most approporiate position for it?

2. Apply position slighly to nudge Alice’s name.

3. Add position to <b>.follow-btn</b> to make sure it is always stick to the bottom right corner of the card.

### Float & clear

1. Inside <b>.card</b>, float the image left:

    1.1. set the with to something smaller and apply float. Make sure there is still some space between <b>h3</b> and the image.

2. Make sure floating is not applied to the <b>p</b> element after the <b>h3</b>.

### Flexbox

1. Replace .cards with:

    <em>
      .cards {
        display: flex;
        gap: 20px;
        justify-content: center;
      }
    </em>


2. Show flex-direction row → column.

### Media queries

1. Add @media (max-width: 600px) to change the background color slightly and apply flex direction column to the <b>cards</b>.