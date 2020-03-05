import { NextPage } from 'next'
import { connect } from 'react-redux'
import styled from 'styled-components'

const H1 = styled.h1`
  background-color: red;
`

const Home: NextPage<{ todos }> = ({ todos }) => (
  <H1>
    Do we quack? :
    {todos.todos[0].title}
  </H1>
)

export default connect((state) => state, {})(Home)
