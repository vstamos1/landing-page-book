import React from 'react';

import MainLayout from '../../gatsby-layouts/main';
import DetailsComponent from '../../../storybook-utils/components/DetailsComponent';
import component from '../../stories/mock/components/stories/locationmarker';
import map from '../../components/LocationMarker/map.json';

class ComponentView extends React.Component {
  render() {
    return (
      <MainLayout pagePushedFunction={this.handlepushedPageLayout}>
        {component && (
          <DetailsComponent
            name={component.name}
            linkGithub="https://github.com/front10/landing-page-book/tree/master/src/components/LocationMarker"
            description={component.summary}
            stories={component.stories}
            importCode={component.import}
            propsDescription={map.props}
          />
        )}
      </MainLayout>
    );
  }
}

export default ComponentView;