import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { styles } from "./AlarmMenuOverlay.styles";

interface AlarmLocation {
  id: string;
  title: string;
  address: string;
  isActive?: boolean;
}

interface AllAlarmsProps {
  onClose: () => void;
  onEditAlarm: (alarmId: string) => void;
  onDeleteAlarm: (alarmId: string) => void;
  onAddAlarm: () => void;
  alarms?: AlarmLocation[];
}

const AllAlarms: React.FC<AllAlarmsProps> = ({
  onClose,
  onEditAlarm,
  onDeleteAlarm,
  onAddAlarm,
  alarms = [
    {
      id: "1",
      title: "Location 1",
      address: "Galwala Road, Pothanegama...",
      isActive: false,
    },
    {
      id: "2",
      title: "Location 2",
      address: "At Vessagiriya Road, 02 Can...",
      isActive: true,
    },
    {
      id: "3",
      title: "Location 3",
      address: "596, 69 Bandaranaike Mawa...",
      isActive: false,
    },
  ],
}) => {
  const renderAlarmItem = ({ item }: { item: AlarmLocation }) => (
    <View style={[styles.alarmItem, item.isActive && styles.activeAlarmItem]}>
      <TouchableOpacity
        style={styles.editButton}
        onPress={() => onEditAlarm(item.id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.editIcon}>✏️</Text>
      </TouchableOpacity>

      <View style={styles.alarmContent}>
        <Text
          style={[styles.alarmTitle, item.isActive && styles.activeAlarmTitle]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.alarmAddress,
            item.isActive && styles.activeAlarmAddress,
          ]}
        >
          {item.address}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDeleteAlarm(item.id)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.deleteIcon}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.modal}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>All Alarms</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>

        {/* Alarms List */}
        <FlatList
          data={alarms}
          keyExtractor={(item) => item.id}
          renderItem={renderAlarmItem}
          style={styles.alarmsList}
          showsVerticalScrollIndicator={false}
        />

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={onAddAlarm}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AllAlarms;
