import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Buttons from '../components/button';

const Home = () => {
  const [val, setVal] = useState('');
  const [data, setData] = useState('');
  const [pre, setPre] = useState('');
  const [visaversa, setvisaversa] = useState(true);
  const [reff, setReff] = useState(0);
  const inv = ln => {
    if (val) {
      if (val[0] === '+') {
        let v = val.split('');
        v[0] = '-';
        v = v.join('');
        setVal(v);
      } else if (val[0] == '-') {
        let v = val.split('');
        v[0] = '+';
        v = v.join('');
        setVal(v);
      } else {
        let v = val.split('');
        v.unshift('-');
        v = v.join('');
        setVal(v);
      }
    }
  };

  const fetchval = re => {
    if (!Number(re)) {
      if (re === '.') {
        let temp = val;
        temp += re;
        setVal(temp);
      } else if (re === '0') {
        let temp = val;
        temp += re;
        setVal(temp);
      } else if (re === '%') {
        setData(Number(val) / 100);
        setVal(Number(val) / 100);
      } else {
        setReff(reff + 1);
        if (reff > 0) {
          if (pre === '+') {
            visaversa
              ? setData(Number(data) + Number(val))
              : setData(-Number(data) + Number(val));
          } else if (pre === '-') {
            visaversa
              ? setData(Number(data) - Number(val))
              : setData(-Number(data) - Number(val));
          } else if (pre === '/') {
            visaversa
              ? setData(Number(data) / Number(val))
              : setData(-Number(data) / Number(val));
          } else if (pre === '*') {
            visaversa
              ? setData(Number(data) * Number(val))
              : setData(-Number(data) * Number(val));
          } else {
            setVal(val => '');
          }
        } else {
          setData(val);
        }
        if (re === '=') {
          setvisaversa(true);
        }
        setVal(val => '');
        setPre(re);
      }
    } else {
      let temp = val;
      temp += re;
      setVal(temp);
    }
  };

  const clear = () => {
    setData('');
    setVal('');
    setReff(0);
    setvisaversa(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={{ flexDirection: 'column-reverse', marginHorizontal: 16}}>
          <Text style={styles.box1text}>{val === '' ? 0 : val}</Text>
        </View>
        <View style={{ flexDirection: 'column-reverse', marginHorizontal: 16}}>
          <Text style={[styles.box1text, {fontSize: 30, color: '#fcf003'}]}>
            {data ? `= ${data}` : ''}
          </Text>
        </View>
      </View>
      <View style={styles.box2}>
        <View style={styles.brows}>
          <Buttons
            colr="#ffff"
            textsize={40}
            btext="AC"
            tclr="#123"
            fun={clear}
          />
          <Buttons
            colr="#ffff"
            textsize={40}
            btext="+/-"
            tclr="#123"
            fun={inv}
          />
          <Buttons
            colr="#ffff"
            textsize={40}
            btext="%"
            tclr="#123"
            fun={fetchval}
          />
          <Buttons
            colr="#f59542"
            textsize={40}
            btext="/"
            tclr="#ffff"
            fun={fetchval}
          />
        </View>
        <View style={styles.brows}>
          <Buttons
            colr="gray"
            textsize={40}
            btext="7"
            tclr="#fff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="8"
            tclr="#fff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="9"
            tclr="#fff"
            fun={fetchval}
          />
          <Buttons
            colr="#f59542"
            textsize={40}
            btext="*"
            tclr="#ffff"
            fun={fetchval}
          />
        </View>
        <View style={styles.brows}>
          <Buttons
            colr="gray"
            textsize={40}
            btext="4"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="5"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="6"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="#f59542"
            textsize={40}
            btext="-"
            tclr="#ffff"
            fun={fetchval}
          />
        </View>
        <View style={styles.brows}>
          <Buttons
            colr="gray"
            textsize={40}
            btext="1"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="2"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="3"
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="#f59542"
            textsize={40}
            btext="+"
            tclr="#ffff"
            fun={fetchval}
          />
        </View>
        <View style={[styles.brows, {width: '101.66%'}]}>
          <Buttons
            colr="gray"
            textsize={40}
            btext="0"
            tclr="#ffff"
            grow={1}
            fun={fetchval}
          />
          <Buttons
            colr="gray"
            textsize={40}
            btext="."
            tclr="#ffff"
            fun={fetchval}
          />
          <Buttons
            colr="#f59542"
            textsize={40}
            btext="="
            tclr="#ffff"
            fun={fetchval}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#123',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  brows: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  box2: {display: 'flex', gap: 16, marginBottom: 32},
  box1: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
  },
  box1text: {color: '#fff', fontSize: 40},
});
