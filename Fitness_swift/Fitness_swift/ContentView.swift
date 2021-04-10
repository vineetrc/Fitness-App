//
//  ContentView.swift
//  Fitness_swift
//
//  Created by Abhi Wangoo on 4/10/21.
//

import SwiftUI

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
        Button(action: {
            
        }) {
            Text("Hello")
                .bold()
                .foregroundColor(.blue)
        }
    }
}
