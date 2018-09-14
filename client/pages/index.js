import fetch from 'isomorphic-unfetch'
import { Link } from '../routes'

import style from './index.scss';

export default class Index extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    const groupsResponse = await fetch('http://localhost:3000/api/groups');
    const groups = await groupsResponse.json()

    return { userAgent, groups }
  }

  render() {
    const { groups } = this.props;
    console.log(groups);
    return (
      <div classame={style.welcome}>
        {groups &&
          <div>
            {groups.map(group => (
              <div key=
                {group.id}>{group.name}
                <Link route={`groups/${group.id}`} >
                  <a>here</a>
                </Link>{' '}
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
};
