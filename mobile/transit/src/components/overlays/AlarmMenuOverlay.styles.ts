import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    width: "90%",
    maxHeight: "80%",
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#333",
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 20,
    color: "#666",
    fontWeight: "300",
  },
  alarmsList: {
    paddingHorizontal: 20,
    maxHeight: 300,
  },
  alarmItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  activeAlarmItem: {
    backgroundColor: "#4a5568",
  },
  editButton: {
    marginRight: 12,
  },
  editIcon: {
    fontSize: 18,
  },
  alarmContent: {
    flex: 1,
  },
  alarmTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 4,
  },
  activeAlarmTitle: {
    color: "#81c7d4",
  },
  alarmAddress: {
    fontSize: 14,
    color: "#666",
  },
  activeAlarmAddress: {
    color: "#a0aec0",
  },
  deleteButton: {
    marginLeft: 12,
  },
  deleteIcon: {
    fontSize: 18,
  },
  addButton: {
    alignSelf: "center",
    marginTop: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#333",
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "300",
  },
});
