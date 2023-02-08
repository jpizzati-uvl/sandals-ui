import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Lightbox } from './lightbox';
import Wrapper from '../../.storybook/wrapper';
import Button from '../button';
import { styles as buttonStyles } from '../button/button.styles';
import Image from '../image';

export default {
  title: 'Components/Lightbox',
  parameters: {},
  component: Lightbox,
} as ComponentMeta<typeof Lightbox>;

const Template: ComponentStory<typeof Lightbox> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Wrapper className="mx-auto mt-[5rem] w-6/12 sm:w-5/12">
        <Button onPress={() => setOpen(true)}>
          <span className={buttonStyles.filled}>Open Lightbox</span>
        </Button>
      </Wrapper>

      <Lightbox handler={() => setOpen(false)} visible={open}>
        <Wrapper className="mx-auto flex h-[20rem] w-full flex-wrap items-center bg-white p-[1.5rem] sm:w-7/12">
          <div className="w-full">
            <div className="text-center">This is sample content.</div>
            <div className="mx-auto mt-[2rem] w-6/12 sm:w-5/12">
              <Button onPress={() => setOpen(false)}>
                <span className={buttonStyles.filled}>Close Lightbox</span>
              </Button>
            </div>
          </div>
        </Wrapper>
      </Lightbox>
    </>
  );
};

export const Default = Template.bind({});

const CustomTemplate: ComponentStory<typeof Lightbox> = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Wrapper className="mx-auto mt-[5rem] w-4/12">
        <Button onPress={() => setOpen(true)}>
          <span className={buttonStyles.filled}>Open Lightbox</span>
        </Button>
      </Wrapper>

      <Lightbox handler={() => setOpen(false)} visible={open}>
        <div className="container h-screen w-screen">
          <div className="relative z-10 flex w-full flex-row flex-wrap justify-end bg-white p-[1.5rem]">
            <Button aria-label="close-lightbox" onPress={() => setOpen(false)}>
              <span className="block text-end">
                <i className="ic-close text-[3rem]" />
              </span>
            </Button>
          </div>

          <div className="relative h-screen w-full">
            <Image
              alt="Fullscreen image"
              src="https://picsum.photos/3000/3000"
              responsive
            />
          </div>
        </div>
      </Lightbox>
    </>
  );
};

export const Custom = CustomTemplate.bind({});
