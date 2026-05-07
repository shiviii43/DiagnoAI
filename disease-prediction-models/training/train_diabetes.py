import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import LabelEncoder
import joblib

#Loading the DataSet
df = pd.read_csv("datasets/diabetes.csv")

#PreProcessing of the data
label_encoder = LabelEncoder()
df["gender"] = label_encoder.fit_transform(df["gender"])
df["location"] = label_encoder.fit_transform(df["location"])
df["smoking_history"] = label_encoder.fit_transform(df["smoking_history"])

#Feature Selection
X = df.drop("diabetes", axis=1)

#Target
y = df["diabetes"]

#Spliting the dataset for the training -> Test & Train Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

# Model Creation
model = RandomForestClassifier()

#training the model
model.fit(X_train,y_train)

#Test Predictions
y_pred = model.predict(X_test)

#Accuracy 
accuracy  = accuracy_score(y_pred,y_test)
print(accuracy)

#Saving the model
joblib.dump(model,"models/diabetes_model.pkl")
print("The model has been saved successfully")