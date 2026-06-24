import { StyleSheet } from "react-native";

const TextInput = StyleSheet.create({
    input: {borderWidth: 1,borderColor: "#eeeeee", paddingHorizontal: 16, backgroundColor:"#fafafa", borderRadius: 10},
    textarea: {borderWidth: 1,borderColor: "#eeeeee", paddingHorizontal: 16, backgroundColor:"#fafafa", borderRadius: 10, height: 150},
    date: {borderWidth: 1,borderColor: "#eeeeee", paddingHorizontal: 16, backgroundColor:"#fafafa", borderRadius: 10, height: 45, flexDirection: "row", alignItems: "center", justifyContent: "space-between"},
    dateText: {
        fontSize: 14,
    },
    dateIcon: {
        height: 18,
        color: "#191919"
    },
    label: {
        color:"#191919",
        fontWeight: 600,
        fontSize: 14,
        marginBottom: 8
    },
    placeholder: {
        color: "#1310107e"
    },
    container: {
        marginBottom: 24
    },
});


export {
    TextInput as TextInputStyle,
}

/**
 * 
 * <div>
            <label className="block text-gray-700 font-medium mb-2">Task Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
 */