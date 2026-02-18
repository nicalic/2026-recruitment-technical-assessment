//
//  ContentView.swift
//  Freerooms Mobile
//
//  Created by Nicole Xie on 2026/2/17.
//

import SwiftUI

struct AppView: View {
    var body: some View {
        ZStack(alignment: .bottom) {
            Color(.systemGroupedBackground).ignoresSafeArea()
            
            VStack(alignment: .leading, spacing: 10) {
                
                HStack {
                    Spacer()
                    IconBar()
                }
                
                Text("Buildings")
                    .font(.largeTitle)
                    .fontWeight(.bold)
                
                SearchBar()
                
                Text("Upper Campus")
                    .font(.subheadline)
                    .padding(.top)
                    .padding(.leading, 12)
                
                BuildingsContainer()
            }
            .padding(.horizontal)
            .foregroundStyle(.text)
            .ignoresSafeArea(.container, edges: .bottom)
            
            TabBar().opacity(0.95)
        }
    }
}

#Preview {
    AppView()
}
