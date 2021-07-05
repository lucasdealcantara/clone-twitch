import React from 'react';

import streamThumbnail from '../../images/download.jpg';
import gau from '../../images/gau.jpg'
import ex from '../../images/ex.jpg';
import alan from '../../images/alan.jpg'

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Grupo 4</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Trabalho para materia React Native
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Ciência & Tecnologia
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  const StreamItem2 = () => (
    <StreamContainer>
      <StreamThumbnail source={alan} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Alanzoka</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Tarde com os amigos
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Valorant
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  const StreamItem3 = () => (
    <StreamContainer>
      <StreamThumbnail source={ex} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>ex_fumante</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Vem com o Aquaman
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            League of Legends
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );

  const StreamItem4 = () => (
    <StreamContainer>
      <StreamThumbnail source={gau} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Gaules</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            GAURENTENA
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Counter-Strike: Global Offensive
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Português</TagText>
          </TagView>
          <TagView>
            <TagText>Web Development</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
  );


  return (
    <List>
      <StreamItem />
      <StreamItem2 />
      <StreamItem3 />
      <StreamItem4 />
    </List>
  );
};

export default StreamList;
