import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import joblib

#Loading the dataset
df = pd.read_csv("datasets/liver.csv")

#Handling missing values 
df["Albumin_and_Globulin_Ratio"] = df["Albumin_and_Globulin_Ratio"].fillna(df["Albumin_and_Globulin_Ratio"].mean())

#Preprocessing of the data
label_encoder = LabelEncoder()
df["Gender"] = label_encoder.fit_transform(df["Gender"])
df["Disease"] = df["Disease"].map({1:1,2:0})

#Features 
X = df.drop("Disease",axis=1)

#Target
y = df["Disease"]

#Test Train Split 
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

#Model creation
model = RandomForestClassifier()

#Training the model
model.fit(X_train,y_train)

#Predict 
y_pred = model.predict(X_test)

#Accuracy Score
accuracy = accuracy_score(y_pred,y_test)
print(accuracy)

joblib.dump(model,"models/liver_model.pkl")
print("Successfully saved the model")