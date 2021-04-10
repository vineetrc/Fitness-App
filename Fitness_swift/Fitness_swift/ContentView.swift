//
//  ContentView.swift
//  Fitness_swift
//
//  Created by Abhi Wangoo on 4/10/21.
//

import SwiftUI
import Firebase

struct ContentView: View {
    var body: some View {
        new_view()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

struct new_view: View {
    var body: some View {
        VStack {
            Button(action: {
            
            }) {
                Text("Hello")
                    .bold()
                    .foregroundColor(.blue)
            }
            HStack {
                Text("Sample1")
                Text("Sample2")
            }
            
            Text("Sample")
            
            ZStack {
                Text("Sample1")
                Text("Sample2")
            }
        }
    }
}
