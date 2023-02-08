import React, { useRef } from 'react';
// import Button from '../button';
// import style from './tabs.module.scss';
// import useWindow from '../../utils/hooks/use-window';

export interface TabsProps {
  children: React.ReactNode;
  customWidth?: number;
  selected?: number;
  tabs: object;
}

/**
 * Primary UI component for user interaction
 */
export const Tabs = ({
  children,
  customWidth,
  // selected = 0,
  tabs,
  ...props
}: TabsProps) => {
  // const { width } = useWindow();
  // const [setActiveTab] = useState(selected);
  // const [scrollable, setScrollable] = useState(true);
  const tabsExist = Array.isArray(tabs);
  const contentExists = Array.isArray(children);
  const tabsRef = useRef<Array<HTMLDivElement | null>>([]);

  // let tabsLength = 1;
  // let tabsWidth: string;

  // const getTabsWidth = (length: number, offset: number) =>
  //   (12 / length - offset).toFixed(0);

  // if (tabsExist) {
  //   tabsLength = tabs.length;
  // }

  // switch (tabsLength) {
  //   default:
  //     tabsWidth = getTabsWidth(tabsLength, 0);
  //     break;
  //   case 2:
  //     tabsWidth = getTabsWidth(tabsLength, 2);
  //     break;
  //   case 3:
  //     tabsWidth = getTabsWidth(tabsLength, 1);
  //     break;
  // }

  // useEffect(() => {
  //   let wrapperWidth = 0;

  //   for (const tab of tabsRef.current) {
  //     if (tab) {
  //       wrapperWidth += tab?.clientWidth;
  //     }
  //   }
  //   setScrollable(wrapperWidth > width);
  // }, [width]);

  return (
    <div {...props} className="container" data-testid="tabs-ui">
      <div className={'row'}>
        <div className="xs-12">
          <div className={'row  center-xs'}>
            {tabsExist &&
              tabs.map((tabTitle: React.ReactNode | string, i) => (
                <div
                  ref={tab => (tabsRef.current[i] = tab)}
                  style={
                    customWidth ? { width: `${customWidth}rem` } : undefined
                  }
                  className={''}
                  key={`${i}-tab`}
                >
                  {/* <Button onPress={() => setActiveTab(i)}>{tabTitle}</Button> */}
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="row">
        {contentExists &&
          children.map((tabContent: React.ReactNode | string, i) => (
            <div className={'xs-12 '} key={`${i}-content`}>
              {tabContent}
            </div>
          ))}
      </div>
    </div>
  );
};
