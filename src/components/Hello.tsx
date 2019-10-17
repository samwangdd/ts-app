import * as React from 'react';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }

  onIncrement = () => {
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm + 1);
  };
  onDecrement = () => {
    if (this.state.currentEnthusiasm < 1) {
      return;
    }
    this.updateEnthusiasmLevel(this.state.currentEnthusiasm - 1);
  };

  updateEnthusiasmLevel = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm });
  };

  render() {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('you could be a little more enthusiastic. :D');
    }
    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

/* function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('you could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
} */

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
