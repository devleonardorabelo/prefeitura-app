import React from 'react';
import { Text, View } from 'react-native';
import FA from 'react-native-vector-icons/FontAwesome5';
import { Post, TPostBlock } from '../../types';

import styles from './styles';

const renderItems = (posts: Post[] | null, category: string): any => {
  if (posts)
    return posts.map((post) => {
      if (post.category === category) {
        return (
          <View key={Math.random()} style={styles.postContainer}>
            {post.category === 'news' && (
              <FA style={{ marginRight: 8 }} name="newspaper" color="#333" size={24} />
            )}
            {post.category === 'schedules' && (
              <FA style={{ marginRight: 8 }} name="hourglass-half" color="#333" size={24} />
            )}
            {post.category === 'messages' && (
              <FA style={{ marginRight: 8 }} name="comments" color="#333" size={24} />
            )}
            <Text style={styles.text}>{post.title}</Text>
          </View>
        );
      }
    });
};

const PostBlock: React.FC<TPostBlock> = ({ data, posts }: TPostBlock) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {data.properties.categories.map((item) => {
        return renderItems(posts, item);
      })}
    </View>
  );
};

export default PostBlock;
