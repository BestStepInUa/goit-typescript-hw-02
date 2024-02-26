/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PageProps {
  title: string;
}
class Component {
  constructor(public props: PageProps) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

const props: PageProps = { title: 'Interface 👌' };
const page = new Page(props);
page.pageInfo();

export {};
