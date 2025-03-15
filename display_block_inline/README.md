The example has three different HTML elements, all of which have an outer display type of block.

A paragraph with a border added in CSS. The browser renders this as a block box. The paragraph starts on a new line and extends the entire available width.

A list, which is laid out using display: flex. This establishes flex layout for the children of the container, which are flex items. The list itself is a block box and — like the paragraph — expands to the full container width and breaks onto a new line.

A block-level paragraph, inside which are two <span> elements. These elements would normally be inline, however, one of the elements has a class of "block" which gets set to display: block.

 <!-- this is the example of block elements -->

<!-- <p>I am a paragraph. A short one.</p>
<ul>
  <li>Item One</li>
  <li>Item Two</li>
  <li>Item Three</li>
</ul>
<p>
  I am another paragraph. Some of the <span class="block">words</span> have been
  wrapped in a <span>span element</span>.
</p>
</body> -->

<!-- body {
    font-family: sans-serif;
  }
  
  p,
  ul {
    border: 2px solid rebeccapurple;
    padding: 0.2em;
    
  }
  
  .block,
  li {
    border: 2px solid blue;
    padding: 0.2em;
  }
  
  ul {
    display: flex;
    list-style: none;
  }
  
  .block {
    display: block;
  } -->


In the next example, we can see how inline elements behave.

The <span> elements in the first paragraph are inline by default and so do not force line breaks.

The <ul> element that is set to display: inline-flex creates an inline box containing some flex items.

The two paragraphs are both set to display: inline. The inline flex container and paragraphs all run together on one line rather than breaking onto new lines (as they would do if they were displaying as block-level elements).

