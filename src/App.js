import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import flexboxgrid from './FlexboxGrid';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 760
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
		@media (min-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

  return acc
}, {})


const Code = ({ className, children }) => (
  <code className={className}>{children}</code>
)

const Div = styled.div`
${flexboxgrid}
`

const Body = Div.withComponent('body').extend`
box-sizing: border-box;
padding: 0;
margin: 0;
font-size: 18px;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: normal;
background: #EEE;
line-height: 1.4rem;
`
const H1 = Div.withComponent('h1').extend`
font-family: "Gibson", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
color: #001A33;
`
const H2 = H1.withComponent('h2').extend`
font-size: 2rem;
margin: 1rem 0;
`
const H3 = H1.withComponent('h3')
const H4 = H1.withComponent('h4')
const H5 = H1.withComponent('h5')
const H6 = H1.withComponent('h6')

const Link = Div.withComponent('a').extend`
text-decoration: none;
color: #007FFF;
padding: 0 0 0.2rem 0;
font-weight: bold;
&:hover {
  color: #007FFF;
}
`

const Pre = Div.withComponent('pre').extend`
overflow-x: auto;
padding: 1.25em;
border: 1px solid #e6e6e6;
border-left-width: 5px;
margin: 1.6em 0;
font-size: 0.875em;
background: #fcfcfc;
white-space: pre;
word-wrap: normal;
`

const StyledCode = styled(Code) `
${flexboxgrid}
color: #007FFF;
`

const Layout = Div.extend`
display: flex;
min-height: 100vh;
flex-direction: column;
`

const Page = Div.extend`
z-index: 0;
background: #EEE;
`

const Wrap = Div.extend`
box-sizing: border-box;
max-width: 1200px;
margin: 0 auto;
`

const Section = Div.withComponent('section').extend`
padding-top: 3rem;
margin-bottom: 3rem;
`

const Hero = Div.withComponent('header').extend`
box-sizing: border-box;
padding: 2rem;
background: #FFF;
border: 1px solid #FFF;
border-radius: 2px;
`

const HeroHeadline = Div.withComponent('h1').extend`
font-size: 3rem;
white-space: nowrap;
margin-bottom: 0;
`

const HeroCopy = Div.withComponent('p').extend`
font-size: 1rem;
margin-bottom: 0;
padding: 0 2rem;
text-align: center;
`

const Button = Div.withComponent('a').extend`
position: relative;
display: inline-block;
box-sizing: border-box;
min-width: 11rem;
padding: 0 4rem;
margin: 1rem;
height: 3rem;
line-height: 3rem;
border: 1px solid #007FFF;
border-radius: 2px;
color: #007FFF;
font-size: 1.25rem;
transition: background-color, 0.15s;
&:hover {
  background: #3399FF;
  border-color: #3399FF;
  color: #FFF;
  text-shadow: 0 1px #007FFF;
}
&:active{
  background: #007FFF;
  color: #FFF;
  border-top: 2px solid #0066CC;
}
`

const Box = Div.extend`
box-sizing: border-box;
position: relative;
box-sizing: border-box;
min-height: 1rem;
margin-bottom: 0;
background: #007FFF;
border: 1px solid #FFF;
border-radius: 2px;
overflow: hidden;
text-align: center;
color: white;
${media.sm`
padding: 1rem;
`}
`
const BoxRow = Box.extend`
margin-bottom: 1rem;
`
const BoxFirst = Box.extend`
background: #0066CC;
border-color: #007FFF;
`
const BoxNested = Box.extend`
background: #003366;
border-color: #007FFF;
`

const BoxLarge = Box.extend`
height: 8rem;
`
const BoxContainer = Box.extend`
box-sizing: border-box;
padding: 0.5rem;
`

const Footer = Div.withComponent('footer').extend`
box-sizing: border-box;
padding-bottom: 3rem;
`

class App extends Component {
  render() {
    return (
      <Body>
        <Page>
          <Hero>
            <Div row centerXs>
              <HeroHeadline>Flexbox Grid</HeroHeadline>
            </Div>
            <Div row centerXs>
              <HeroCopy>A grid system based on the <a href="http://caniuse.com/#search=flexbox"><Code>flex</Code></a> display
                        property.</HeroCopy>
            </Div>
            <Div row centerXs>
              <Button href="https://github.com/kristoferjoseph/flexboxgrid/archive/v6.3.1.zip">Download</Button>
              <Button href="https://github.com/kristoferjoseph/flexboxgrid">Github</Button>
            </Div>
          </Hero>
          <Wrap containerFluid>
            <Section>
              <H2>Responsive</H2>
              <p>Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs,
                        sm, md &amp; lg viewport widths.</p>
              <Div row>
                <Div colXs={12} colSm={3} colMd={2} colLg={1}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={6} colSm={6} colMd={8} colLg={10}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={6} colSm={3} colMd={2} colLg={1}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={12} colSm={3} colMd={2} colLg={1}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={12} colSm={9} colMd={10} colLg={11}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={10} colSm={6} colMd={8} colLg={10}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={2} colSm={6} colMd={4} colLg={2}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Pre><StyledCode>
                {`
                <Div row>
                  <Div colXs={12} colSm={8} colMd={6} colLg={4}>
                     <Box>Responsive</Box>
                  </Div>
                </Div>
                `}
              </StyledCode></Pre>
            </Section>
            <Section>
              <br />
              <H2>Fluid</H2>
              <p>Percent based widths allow fluid resizing of columns and rows.</p>
              <Div row>
                <Div colXs={12}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={1}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={11}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={2}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={10}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={3}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={9}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={4}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={8}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={5}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={7}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs={6}>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs={6}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
            </Section>
            <Section>
              <H2>Simple Syntax</H2>
              <p>All you need to remember is row, column, content.</p>
              <Pre><StyledCode>{`
              <Div row>
                <Div colXs={12}>
                  <Box>12</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section>
            <Section>
              <H2>Offsets</H2>
              <p>Offset a column</p>
              <Div row>
                <Div colXsOffset={11} colXs={1}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={10} colXs={2}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={9} colXs={3}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={8} colXs={4}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={7} colXs={5}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={6} colXs={6}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={5} colXs={7}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={4} colXs={8}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={3} colXs={9}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={2} colXs={10}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXsOffset={1} colXs={11}>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row>
                <Div colXsOffset={3} colXs={9}>
                  <Box>offset</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section>
            <Section>
              <H2>Auto Width</H2>
              <p>Add any number of auto sizing columns to a row. Let the grid figure it out.</p>
              <Div row>
                <Div colXs>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Div row>
                <Div colXs>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs>
                  <BoxRow></BoxRow>
                </Div>
                <Div colXs>
                  <BoxRow></BoxRow>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row>
                <Div colXs>
                  <Box>auto</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section>
            <Section>
              <H2>Nested Grids</H2>
              <p>Nest grids inside grids inside grids.</p>
              <Div row>
                <Div colXs={7}>
                  <BoxContainer>
                    <Div row>
                      <Div colXs={9}>
                        <BoxFirst>
                          <Div row>
                            <Div colXs={4}>
                              <BoxNested />
                            </Div>
                            <Div colXs={8}>
                              <BoxNested />
                            </Div>
                          </Div>
                        </BoxFirst>
                      </Div>
                      <Div colXs={3}>
                        <BoxFirst>
                          <Div row>
                            <Div colXs>
                              <BoxNested />
                            </Div>
                          </Div>
                        </BoxFirst>
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
                <Div colXs={5}>
                  <BoxContainer>
                    <Div row>
                      <Div colXs={12}>
                        <BoxFirst>
                          <Div row>
                            <Div colXs={6}>
                              <BoxNested />
                            </Div>
                            <Div colXs={6}>
                              <BoxNested />
                            </Div>
                          </Div>
                        </BoxFirst>
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row>
                <Div colXs>
                  <Box>
                    <Div row>
                      <Div colXs>
                        <Box>auto</Box>
                      </Div>
                    </Div>
                  </Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section>
            <Section>
              <H2>Alignment</H2>
              <p>Add classes to align elements to the start or end of a row as well as the top,
                    bottom, or center of a column</p>
              <H3><Code>start</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row startXs>
                      <Div colXs={6}>
                        <BoxNested />
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row startXs>
                <Div colXs={6}>
                  <Box>start</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>center</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row centerXs>
                      <Div colXs={6}>
                        <BoxNested />
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row centerXs>
                <Div colXs={6}>
                  <Box>center</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>end</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row endXs>
                      <Div colXs={6}>
                        <BoxNested />
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row endXs>
                <Div colXs={6}>
                  <Box>end</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <p>Here is an example of using the modifiers in conjunction to acheive different alignment at different viewport sizes. </p>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row centerXs endSm startLg>
                      <Div colXs={6}>
                        <BoxNested />
                      </Div>
                    </Div>
                  </BoxContainer>
                </Div>
              </Div>
              Example
      <Pre > <StyledCode>{`
              <Div row centerXs endSm startLg>
                <Div colXs={6}>
                  <Box>All together now</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>top</Code></H3>
              <Div row topXs>
                <Div colXs={6}>
                  <BoxLarge />
                </Div>
                <Div colXs={6}>
                  <Box />
                </Div>
              </Div>
              <Pre><StyledCode>{`
              <Div row topXs>
                <Div colXs={6}>
                  <Box>top</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>middle</Code></H3>
              <Div row middleXs>
                <Div colXs={6}>
                  <BoxLarge />
                </Div>
                <Div colXs={6}>
                  <Box />
                </Div >
              </Div >
              <Pre><StyledCode>
                {`
              <Div row middleXs>
                <Div colXs={6}>
                  <Box>middle</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>bottom</Code></H3>
              <Div row bottomXs>
                <Div colXs={6}>
                  <BoxLarge />
                </Div>
                <Div colXs={6}>
                  <Box />
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row bottomXs>
                <Div colXs={6}>
                  <Box>bottom</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section >
            <Section>
              <H2>Distribution</H2>
              <p>Add classes to distribute the contents of a row or column.</p>
              <H3><Code>around</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row aroundXs>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                    </Div>
                  </BoxContainer >
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row aroundXs>
                <Div colXs={2}>
                  <Box>around</Box>
                </div>
                <Div colXs={2}>
                  <Box>around</Box>
                </div>
                <Div colXs={2}>
                  <Box>around</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>between</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row betweenXs>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                      <Div colXs={2}>
                        <BoxNested />
                      </Div>
                    </Div >
                  </BoxContainer >
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row betweenXs>
                <Div colXs={2}>
                  <Box>between</Box>
                </div>
                <Div colXs={2}>
                  <Box>between</Box>
                </div>
                <Div colXs={2}>
                  <Box>between</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section >
            <Section>
              <H2>Reordering</H2>
              <p>Add classes to reorder columns.</p>
              <H3><Code>first</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row>
                      <Div colXs={2}>
                        <BoxFirst>1</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        <BoxFirst>2</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        <BoxFirst>3</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        <BoxFirst>4</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        < BoxFirst > 5</BoxFirst >
                      </Div >
                      <Div colXs={2} firstXs>
                        < BoxNested > 6</BoxNested >
                      </Div >
                    </Div >
                  </BoxContainer >
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row>
                <Div colXs={2}>
                  <Box>1</Box>
                </div>
                <Div colXs={2}>
                  <Box>2</Box>
                </div>
                <Div colXs={2} firstXs>
                  <Box>3</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
              <H3><Code>last</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row>
                      <Div colXs={2} lastXs>
                        <BoxNested>1</BoxNested>
                      </Div>
                      <Div colXs={2}>
                        <BoxFirst>2</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        <BoxFirst>3</BoxFirst>
                      </Div>
                      <Div colXs={2}>
                        < BoxFirst > 4</BoxFirst >
                      </Div >
                      <Div colXs={2}>
                        < BoxFirst > 5</BoxFirst >
                      </Div >
                      <Div colXs={2}>
                        < BoxFirst > 6</BoxFirst >
                      </Div >
                    </Div >
                  </BoxContainer >
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row>
                <Div colXs={2} lastXs>
                  <Box>1</Box>
                </div>
                <Div colXs={2}>
                  <Box>2</Box>
                </div>
                <Div colXs={2}>
                  <Box>3</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section >
            <Section>
              <H2>Reversing</H2>
              <H3><Code>.reverse</Code></H3>
              <Div row>
                <Div colXs={12}>
                  <BoxContainer>
                    <Div row reverse>
                      <Div colXs={2}>
                        <BoxNested>1</BoxNested>
                      </Div>
                      <Div colXs={2}>
                        <BoxNested>2</BoxNested>
                      </Div>
                      <Div colXs={2}>
                        <BoxNested>3</BoxNested>
                      </Div>
                      <Div colXs={2}>
                        <BoxNested>4</BoxNested>
                      </Div>
                      <Div colXs={2}>
                        < BoxNested > 5</BoxNested >
                      </Div >
                      <Div colXs={2}>
                        < BoxNested > 6</BoxNested >
                      </Div >
                    </Div >
                  </BoxContainer >
                </Div >
              </Div >
              <Pre><StyledCode>{`
              <Div row reverse>
                <Div colXs={2}>
                  <Box>1</Box>
                </div>
                <Div colXs={2}>
                  <Box>2</Box>
                </div>
                <Div colXs={2}>
                  <Box>3</Box>
                </Div>
              </Div>
              `}</StyledCode></Pre>
            </Section >
            <Footer>
              <Div row>
                <Div colXs start> <a class="tag" href="http://twitter.com/dam">
                  @dam ♡s you
                    </a>
                </Div>
                <Div colXs end> <a class="link-top" href="#top">⇪ back to top</a>
                </Div>
              </Div>
            </Footer>
          </Wrap >
        </Page >
      </Body >
    );
  }
}

export default App;
