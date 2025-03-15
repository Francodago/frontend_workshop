First example:
In the example below, try changing the margin values to see how the box is pushed around due to the margin creating or removing space (if it is a negative margin) between this element and the containing element.
 <!-- <div class="container">
        <div class="box">Change my margin.</div>
      </div> -->
<!-- .container {
    border: 5px solid blue;
    margin: 40px;
  }
  
  .box {
    border: 5px solid rebeccapurple;
    background-color: lightgray;
    padding: 10px;
    height: 100px;
    /* try changing the margin properties: */
    margin-top: 40px;
    margin-right: 40px;
    margin-bottom: 40px;
    margin-left: 4em;
  } -->

Second example:
In the example below, we have two paragraphs. The top paragraph has a margin-bottom of 50 pixels, the other has a margin-top of 30 pixels. The margins have collapsed together so the actual margin between the boxes is 50 pixels and not the total of the two margins.

You can test this by setting the margin-top of paragraph two to 0. The visible margin between the two paragraphs will not change — it retains the 50 pixels set in the margin-bottom of paragraph one. If you set it to -10px, you'll see that the overall margin becomes 40px — it subtracts from the 50px.