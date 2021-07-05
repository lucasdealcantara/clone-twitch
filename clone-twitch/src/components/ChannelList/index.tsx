import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>theoback1</Username>
          <Info>20 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem2 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>ex_fumante</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem3 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>geelee8</Username>
          <Info>50 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem4 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>gaules</Username>
          <Info>150 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem5 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Dilera</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem6 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Smzinho</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem7 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>deercheerup</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );
  const ChannelItem8 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>FlowPodcast</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem9 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>ziGueira</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  const ChannelItem10 = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>ex_fumante</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem2 />
      <ChannelItem3 />
      <ChannelItem4 />
      <ChannelItem5 />
      <ChannelItem6 />
      <ChannelItem7 />
      <ChannelItem8 />
      <ChannelItem9 />
      <ChannelItem10 />
    </List>
  );
};

export default ChannelList;
