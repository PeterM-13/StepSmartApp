import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Switch, Dimensions, TextInput } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function HeartPage({navigation}) {
    const [heartData, setHeartData] = useState({ });
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.toggleContainer}>
                <Text style={{fontSize:22}}>Logging</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#4cd964' }}
                    thumbColor={heartData.logging ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={()=>setHeartData({...heartData, logging: (heartData.logging==1)?'0':'1'})}
                    value={(heartData)?heartData.heart=='1':1}
                />
            </View>
            <Text style={{fontSize:15, width:'70%',marginTop:15,marginBottom:40,color:'#8e8e8e'}}>Enables heart rate monitoring, using the sensor built into the handle.</Text>
            <View style={styles.toggleContainer}>
                <Text style={styles.text}>Current Heart Rate</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={'60'}
                    editable={false}
                />
            </View>
            <Text style={{fontSize:22, textAlign:'left',width:'70%',marginTop:40,marginBottom:5}}>Last 6 Hours</Text>
            <ChartComponent/>
        </View>
        </View>
    );
}
const ChartComponent = () => {
    // Sample data for time and heart rate
    const timeData = ['08:00', '08:30', '09:00', '09:30', '10:00', '11:00']; // Replace with your actual time data
    const heartRateData = [70, 60, 68, 74, 78, 80, 87, 76, 100, 80]; // Replace with your actual heart rate data

  // Chart configuration
  const chartConfig = {
    backgroundColor: 'rgb(255, 255, 255)', // Make background transparent
    backgroundGradientFrom: 'rgb(242, 242, 242)', // Transparent color
    backgroundGradientTo: 'rgb(242, 242, 242)', // Transparent color
    decimalPlaces: 0, // Number of decimal places for Y-axis values
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color of the data lines
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Color of the axis labels
    propsForDots: {
        //r: '6', // Increase the dot size for better visibility
        strokeWidth: '2',
      },
};

  return (
    <View>
      <LineChart
        data={{
          labels: timeData,
          datasets: [
            {
              data: heartRateData,
            },
          ],
        }}
        width={Dimensions.get('window').width*0.8} // Width of the chart (adjust according to your layout)
        height={330} // Height of the chart (adjust according to your layout)
        yAxisLabel="" // Y-axis label
        chartConfig={chartConfig}
        bezier
        withVerticalLines={false}
        segments={5}
        style={{
            borderRadius: 8,
            marginLeft: -22,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50,
    },
    toggleContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '70%',
    },
    input: {
        width: '20%',
        marginTop: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
        height: 50,
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0)',
        borderRadius: 8,
        padding: 8,
        textAlign: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    text: {
        fontSize: 22,
        textAlign: 'left',
        width: '70%',
    },
});